var consoleerr = function (err) {
    if (err) {
        console.log(err.stack)
    }
};

module.exports = consoleerr