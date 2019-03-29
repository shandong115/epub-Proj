// 该库可以将传入的字符串/对象变为JSON，读取时可以将JSON变为字符串
// 这是别人封装的，操作起来更方便https://www.cnblogs.com/wuchangming/p/4897703.html
import Storage from 'web-storage-cache'
const localStorage = new Storage()

export function setLocalStorage(key, value) {
    return localStorage.set(key, value)
}

export function getLocalStorage(key) {
    return localStorage.get(key)
}

export function removeLocalStorage(key) {
    return localStorage.delete(key)
}

export function clearLocalStorage() {
    return localStorage.clear()
}

export function setBookObject(fileName, key, value) {
    let book = getLocalStorage(`${fileName}-info`)
    if (!book) {
        book = {}
    }
    book[key] = value
    setLocalStorage(`${fileName}-info`, book)
}

export function getBookObject(fileName, key) {
    let book = getLocalStorage(`${fileName}-info`)
    if (book) {
        return book[key]
    } else {
        return null
    }
}

export function getFontFamily(fileName) {
    return getBookObject(fileName, 'fontFamily')
}

export function saveFontFamily(fileName, font) {
    return setBookObject(fileName, 'fontFamily', font)
}

export function getTheme(fileName) {
    return getBookObject(fileName, 'theme')
}

export function saveTheme(fileName, theme) {
    setBookObject(fileName, 'theme', theme)
}

export function getFontSize(fileName) {
    return getBookObject(fileName, 'fontSize')
}

export function saveFontSize(fileName, fontSize) {
    setBookObject(fileName, 'fontSize', fontSize)
}

export function getMetadata(fileName) {
    return getBookObject(fileName, 'metadata')
}

export function saveMetadata(fileName, metadata) {
    setBookObject(fileName, 'metadata', metadata)
}

export function getCover(fileName) {
    return getBookObject(fileName, 'cover')
}

export function saveCover(fileName, cover) {
    setBookObject(fileName, 'cover', cover)
}

export function getReadTime(fileName) {
    return getBookObject(fileName, 'time')
}

export function saveReadTime(fileName, time) {
    setBookObject(fileName, 'time', time)
}

export function getProgress(fileName) {
    return getBookObject(fileName, 'progress')
}

export function saveProgress(fileName, progress) {
    setBookObject(fileName, 'progress', progress)
}

export function getLocale(locale) { // 缓存语言类型
    return getLocalStorage('locale')
}

export function saveLocale(locale) {
    return setLocalStorage('locale', locale)
}

// 存取当前阅读进度
export function saveLocation(fileName, location) {
    setBookObject(fileName, 'location', location)
}

export function getLocation(fileName) {
    return getBookObject(fileName, 'location')
}
