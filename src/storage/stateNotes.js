import storage from '../storage';

export default {
  get allNotes() { return storage.get().allNotes },
  get length() { return this.allNotes.length },
  get allPage() { return Math.ceil(this.length / this.count) },
  get count() { return 5 },
  get currentPage() { return localStorage.getItem('page') || 1 },
  get floorItem() {
    if (this.currentPage - 1 == this.allPage) {
      localStorage.setItem('page', `${this.allPage}`);
      return this.count * this.allPage - this.count;
    }
    return this.count * this.currentPage - this.count
  }
}