import storage from './localStorage';

function Pagination() {
let arrayNotes = storage.get();

  if (arrayNotes.length < 5) {
    this.setState({ arrayNotes })
  } else {

    let currentPage = localStorage.getItem('page') || 1;
    let count = 5
    let length = arrayNotes.length;
    let allPage = Math.ceil(length / count);
    let floorItem = count * currentPage - count;

    this.setState({ currentPage })

    let arrayPagination = [];
    for (let i = 1; i <= allPage; i++) arrayPagination.push(i);
    this.setState({ arrayPagination })


    if (currentPage - 1 == allPage) {
      floorItem = count * allPage - count;
      localStorage.setItem('page', `${allPage}`);
      this.setState({ currentPage: allPage })
    }

    let array = [];
    for (let i = floorItem; i < length && i < floorItem + count; i++) {
      array.push(arrayNotes[i]);
    }
    
    this.setState({ arrayNotes: array })

  }
}

export default Pagination;