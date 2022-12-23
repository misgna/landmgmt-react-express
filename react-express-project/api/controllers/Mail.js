const mailServices = require('../services/Mail');

module.exports = {
    getSentMails: (req, res, next) => {
        const data = {'sender': req.params.sender};

        mailServices.getSentMails(data, (err, result) => {
            if (err) {
                res.send({
                    status: 'error',
                    message: 'Request error!'
                });
            } else {
                res.send({
                    status: 'ok',
                    message:'',
                    result: result
                });
            }
        });
    },
    getReceivedMails: (req, res, next) => {
        const data = {'receiver': req.params.receiver};

        mailServices.getReceivedMails(data, (err, result) => {
            if (err) {
                res.send({
                    status: 'error',
                    message: 'Request error!'
                });
            } else {
                res.send({
                    status: 'ok',
                    message:'',
                    result: result
                });
            }
        });
    },
    setMail: (req, res, next) => {
        const data = {sender: req.body.sender, receiver: req.body.receiver, message: req.body.message, status: req.body.status, subject: req.body.subject};

        mailServices.setMail(data, (err, result) => {
            if(err) {
                res.send({
                    status: 'error',
                    message: 'Message is not sent!'
                });
            } else {
                res.send({
                    status: 'ok',
                    message: 'Message is sent!'
                });
            }
        })

    },
    updateStatusMail: (req, res, next) => {
        const data = {sender: req.body.sender, receiver: req.body.receiver, created_at: req.body.created_at, status: req.body.status};

        mailServices.updateStatusMail(data, (err, result) => {
            if(err) {
                res.send({
                    status: 'error',
                    message: 'Status is not changed!'
                });
            } else {
                res.send({
                    status: 'ok',
                    message: 'Status changed!'
                });
            }
        })
    }
}