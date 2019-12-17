module.exports = (object) => {
        return 'address' in object === '' ? true : false;
}