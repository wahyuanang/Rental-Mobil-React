const healtcheck = async (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "Application passed healtcheck",
            isSuccess: true,
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Application failed pass healtcheck",
            isSuccess: false,
            data: null,
        });
    }
};

function onLost(req, res, next) {
    res.status(404).json({
        status: "Failed",
        message: "API not found",
        isSuccess: false,
        data: null,
    });
    next
}

function onError(err, req, res, next) {
    res.status(500).json({
        status: "Failed",
        message: err.message,
        isSuccess: false,
        data: null,
    });
    next
}

module.exports = {
    onLost,
    onError,
    healtcheck
};
