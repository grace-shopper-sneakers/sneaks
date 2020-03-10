import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (start, end, step = 1) => {
  let i = start
  const rangeArr = []

  while (i <= end) {
    rangeArr.push(i)
    i += step
  }

  return rangeArr
}

class Pagination extends Component {
  constructor(props) {
    super(props)
    const {totalRecords = null, pageLimit = 50, pageNeighbors = 0} = props

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 50
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0

    this.pageNeighbors =
      typeof pageNeighbors === 'number'
        ? Math.max(0, Math.min(pageNeighbors, 2))
        : 0

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit)

    this.state = {currentPage: 1}
  }

  componentDidMount() {
    this.gotoPage(1)
  }

  gotoPage = page => {
    const {onPageChanged = f => f} = this.props

    const currentPage = Math.max(0, Math.min(page, this.totalPages))

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    }

    this.setState({currentPage}, () => onPageChanged(paginationData))
  }

  handleClick = page => evt => {
    evt.preventDefault()
    this.gotoPage(page)
  }

  handleMoveLeft = evt => {
    evt.preventDefault()
    this.gotoPage(this.state.currentPage - this.pageNeighbors * 2 - 1)
  }

  handleMoveRight = evt => {
    evt.preventDefault()
    this.gotoPage(this.state.currentPage + this.pageNeighbors * 2 + 1)
  }

  fetchPageNumbers = () => {
    const totalPages = this.totalPages
    const currentPage = this.state.currentPage
    const pageNeighbors = this.pageNeighbors

    const totalNumbers = this.pageNeighbors * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors)

      let pages = range(startPage, endPage)

      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [LEFT_PAGE, ...extraPages, ...pages]
          break
        }

        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pages = [...pages, ...extraPages, RIGHT_PAGE]
          break
        }

        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
          break
        }
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  }

  render() {
    if (!this.totalRecords || this.totalPages === 1) return null

    const {currentPage} = this.state
    const pages = this.fetchPageNumbers()

    return (
      <Fragment>
        <nav>
          <ul>
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)
                return (
                  <button type="button" key={index}>
                    <a onClick={this.handleMoveLeft}>
                      <span>&laquo;</span>
                      <span>Previous</span>
                    </a>
                  </button>
                )

              if (page === RIGHT_PAGE)
                return (
                  <button type="button" key={index}>
                    <a onClick={this.handleMoveRight}>
                      <span>&raquo;</span>
                      <span>Next</span>
                    </a>
                  </button>
                )

              return (
                <button type="button" key={index}>
                  <a onClick={this.handleClick(page)}>{page}</a>
                </button>
              )
            })}
          </ul>
        </nav>
      </Fragment>
    )
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbors: PropTypes.number,
  onPageChanged: PropTypes.func
}

export default Pagination
