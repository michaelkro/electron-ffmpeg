export default class {
  constructor({ name, path, size, type } = {}) {
    this.name = name || 'file-1';
    this.path = path || '/path/to/file';
    this.size = size || 1;
    this.type = type || 'audio/flac';
  }
}
