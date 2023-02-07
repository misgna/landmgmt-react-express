const leaseInfoServices = require('../services/LeaseInfo');

module.exports = {
    addLeaseInfo: (req, res, next) => {
        const data = req.body;
        leaseInfoServices.addLeaseInfo(data, (err, result) => {
            if (err) {
                    res.send({
                        status: "error",
                        message: "Record is not added!"
                    });
            }
            else {
                res.send({
                    status: "ok",
                    message: "Record is added!"
                });
            }
        })
    },
    getLeaseInfo: (req, res, next) => {
        leaseInfoServices.getLeaseInfo((err, result) => {
            if (err) {
                res.send({
                    status: "error",
                    message: "Problem with getting data from the database!"
                });
            }
            else {
                res.send({
                    status: "ok",
                    message: "Record is read!",
                    result: result
                });
            }
        });
    },
    updateLeaseInfo: (req, res, next) => {
        const data = req.body;
        leaseInfoServices.updateLeaseInfo(data, (err, result) => {
            if (err) {
                res.send({
                    status: "error",
                    message: "Record is not update!"
                });
            }
            else {
                res.send({
                    status: "ok",
                    message: "Record is updated!",
                });
            }
        })
    },
    deleteLeaseInfo: (req, res, next) => {
        const data = req.body;

        leaseInfoServices.deleteLeaseInfo(data, (err, result) => {
            if (err) {
                res.send({
                    status: "error",
                    message: "Record is not deleted!"
                });
            }
            else {
                res.send({
                    status: "ok",
                    message: "Record is deleted!",
                });
            }
        })
    },
    getLeaseInfoById: (req, res, next) => {
        const data = req.body;

        leaseInfoServices.getLeaseInfoByLeaseNumber(data, (err, result) => {
            if (err) {
                res.send({
                    status: "error",
                    message: "Problem with getting data from the database!"
                });
            }
            else {
                res.send({
                    status: "ok",
                    message: "Record is retrieved!",
                    result: result
                });
            }
        })
    },
    // addTenantInfo: (req, res, next) => {
    //     const data = req.body;
    //     leaseInfoServices.addTenantInfo(data, (err, result) => {
    //         if (err) {
    //                 res.send({
    //                     status: "error",
    //                     message: "Record is not added!"
    //                 });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is added!"
    //             });
    //         }
    //     })
    // },
    // getTenantInfo: (req, res, next) => {
    //     leaseInfoServices.getTenantInfo((err, result) => {
    //         if (err) {
    //             res.send({
    //                 status: "error",
    //                 message: "Problem with getting data from the database!"
    //             });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is read!",
    //                 result: result
    //             });
    //         }
    //     });
    // },
    // updateTenantInfo: (req, res, next) => {
    //     const data = req.body;
    //     leaseInfoServices.updateTenantInfo(data, (err, result) => {
    //         if (err) {
    //             res.send({
    //                 status: "error",
    //                 message: "Record is not update!"
    //             });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is updated!",
    //             });
    //         }
    //     })
    // },
    // deleteTenantInfo: (req, res, next) => {
    //     const data = req.body;

    //     leaseInfoServices.deleteTenantInfo(data, (err, result) => {
    //         if (err) {
    //             res.send({
    //                 status: "error",
    //                 message: "Record is not deleted!"
    //             });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is deleted!",
    //             });
    //         }
    //     })
    // },
    // getTenantInfoById: (req, res, next) => {
    //     const data = req.body;

    //     leaseInfoServices.getTenantInfoById(data, (err, result) => {
    //         if (err) {
    //             res.send({
    //                 status: "error",
    //                 message: "Problem with getting data from the database!"
    //             });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is retrieved!",
    //                 result: result
    //             });
    //         }
    //     })
    // },
    // addLandlordInfo: (req, res, next) => {
    //     const data = req.body;
    //     leaseInfoServices.addLandlordInfo(data, (err, result) => {
    //         if (err) {
    //                 res.send({
    //                     status: "error",
    //                     message: "Record is not added!"
    //                 });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is added!"
    //             });
    //         }
    //     })
    // },
    // getLandlordInfo: (req, res, next) => {
    //     leaseInfoServices.getLandlordInfo((err, result) => {
    //         if (err) {
    //             res.send({
    //                 status: "error",
    //                 message: "Problem with getting data from the database!"
    //             });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is read!",
    //                 result: result
    //             });
    //         }
    //     });
    // },
    // updateLandlordInfo: (req, res, next) => {
    //     const data = req.body;
    //     leaseInfoServices.updateLandlordInfo(data, (err, result) => {
    //         if (err) {
    //             res.send({
    //                 status: "error",
    //                 message: "Record is not update!"
    //             });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is updated!",
    //             });
    //         }
    //     })
    // },
    // deleteLandlordInfo: (req, res, next) => {
    //     const data = req.body;

    //     leaseInfoServices.deleteLandlordInfo(data, (err, result) => {
    //         if (err) {
    //             res.send({
    //                 status: "error",
    //                 message: "Record is not deleted!"
    //             });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is deleted!",
    //             });
    //         }
    //     })
    // },
    // getLandlordInfoById: (req, res, next) => {
    //     const data = req.body;
    //     leaseInfoServices.getLandlordInfoById(data, (err, result) => {
    //         if (err) {
    //             res.send({
    //                 status: "error",
    //                 message: "Problem with getting data from the database!"
    //             });
    //         }
    //         else {
    //             res.send({
    //                 status: "ok",
    //                 message: "Record is retrieved!",
    //                 result: result
    //             });
    //         }
    //     })
    // },
    getSearchResult: (req, res, next) => {
        const searchBy = req.body.filterBy;
        const keywords = req.body.keywords;
        
        console.log(req.body);
        if (searchBy === '1') {
            const data = {LeaseNumber: keywords};
            
            leaseInfoServices.getLeaseInfoByLeaseNumber(data, (err, result) => {
                
                if (err) {
                    res.send({
                        status: "error",
                        message: "Record not found! Please check using Tenant name!"
                    });
                }
                else {
                    
                    res.send({
                        status: "ok",
                        message: "Record is retrieved!",
                        result: result
                    });
                }
            });
        } else if (searchBy === '2') {
            const data = {search: keywords};
            
            leaseInfoServices.getLeaseInfoByTenantName(data, (err, result) => {
                console.log(result);
                if (err) {
                    res.send({
                        status: "error",
                        message: "Record not found! Please check using Lease Number!"
                    });
                }
                else {
                    
                    res.send({
                        status: "ok",
                        message: "Record is retrieved!",
                        result: result
                    });
                }
            })
        }
    }
}