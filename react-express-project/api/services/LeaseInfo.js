const conn = require('../config/db');

module.exports = {
    addLeaseInfo: (data, callback) => {
        const sql = "INSERT INTO lease (LeaseNumber, LeaseType, LeaseSignedDate) VALUES (?, ?, ?)";
        
        conn.query(sql, [data.LeaseNumber, data.LeaseType, data.SignedDate], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    getLeaseInfo: (callback) => {
        const sql = "SELECT * FROM lease";

        conn.query(sql, (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    updateLeaseInfo: (data, callback) => {
        const sql = "UPDATE lease SET LeaseType = ?, LeaseSignedDate = ? WHERE LeaseNumber = ?";
        
        conn.query(sql, [data.LeaseType, data.SignedDate, data.LeaseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    deleteLeaseInfo: (data, callback) => {
        const sql = "DELETE FROM lease WHERE LeaseNumber = ?";

        conn.query(sql, [data.LeaseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });

    },
    getLeaseInfoById: (data, callback) => {
        const sql = "SELECT * FROM lease WHERE LeaseNumber = ?";

        conn.query(sql, [data.LeaseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    },
    addTenantInfo: (data, callback) => {
        const sql = "INSERT INTO lease_tenant (LeaseNumber, TenantName, TenantFName, TenantGFName, TenantNationality, TenantSubcity, TenantWereda, TenantHouseNumber, \
                            TenantPhonenumber, TenantWitnessName, TenantWitnessFName, TenantWitnessGFName, TenantWitnessNationality, TenantWitnessSubcity, TenantWitnessWereda, \
                            TenantWitnessHouseNumber, TenantWitnessPhonenumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        conn.query(sql, [data.LeaseNumber, data.TenantName, data.TenantFName, data.TenantGFName, data.TenantNationality, data.TenantSubcity, data.TenantWereda,
                            data.TenantHouseNumber, data.TenantPhonenumber, data.TenantWitnessName, data.TenantWitnessFName, data.TenantWitnessGFName, data.TenantWitnessNationality,
                            data.TenantWitnessSubcity, data.TenantWitnessWereda, data.TenantWitnessHouseNumber, data.TenantWitnessPhonenumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    getTenantInfo: (callback) => {
        const sql = "SELECT * FROM lease_tenant";

        conn.query(sql, (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    updateTenantInfo: (data, callback) => {
        const sql = "UPDATE lease_tenant SET TenantName = ?, TenantFName = ?, TenantGFName = ?, TenantNationality = ?, TenantSubcity = ?, TenantWereda = ?, TenantHouseNumber = ?, \
        TenantPhonenumber = ?, TenantWitnessName = ?, TenantWitnessFName = ?, TenantWitnessGFName = ?, TenantWitnessNationality = ?, TenantWitnessSubcity = ?, TenantWitnessWereda = ?, \
        TenantWitnessHouseNumber = ?, TenantWitnessPhonenumber = ? WHERE LeaseNumber = ?";
        
        conn.query(sql, [data.TenantName, data.TenantFName, data.TenantGFName, data.TenantNationality, data.TenantSubcity, data.TenantWereda,
            data.TenantHouseNumber, data.TenantPhonenumber, data.TenantWitnessName, data.TenantWitnessFName, data.TenantWitnessGFName, data.TenantWitnessNationality,
            data.TenantWitnessSubcity, data.TenantWitnessWereda, data.TenantWitnessHouseNumber, data.TenantWitnessPhonenumber, data.LeaseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    deleteTenantInfo: (data, callback) => {
        const sql = "DELETE FROM lease_tenant WHERE LeaseNumber = ?";

        conn.query(sql, [data.LeaseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    getTenantInfoById: (data, callback) => {
        const sql = "SELECT * FROM lease_tenant WHERE LeaseNumber = ?";

        conn.query(sql, [data.LeaseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    },
    addLandlordInfo: (data, callback) => {
        const sql = "INSERT INTO lease_landlord (LeaseNumber, WitnessName, WitnessFName, WitnessGFName, WitnessNationality, WitnessSubcity, WitnessWereda, \
                            WitnessHouseNumber, WitnessPhonenumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        conn.query(sql, [data.LeaseNumber, data.WitnessName, data.WitnessFName, data.WitnessGFName, data.WitnessNationality,
                            data.WitnessSubcity, data.WitnessWereda, data.WitnessHouseNumber, data.WitnessPhonenumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    getLandlordInfo: (callback) => {
        const sql = "SELECT * FROM lease_landlord";

        conn.query(sql, (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    updateLandlordInfo: (data, callback) => {
        const sql = "UPDATE lease_landlord SET WitnessName = ?, WitnessFName = ?, WitnessGFName = ?, WitnessNationality = ?, WitnessSubcity = ?, WitnessWereda = ?, \
        WitnessHouseNumber = ?, WitnessPhonenumber = ? WHERE LeaseNumber = ?";
        
        conn.query(sql, [data.WitnessName, data.WitnessFName, data.WitnessGFName, data.WitnessNationality,
            data.WitnessSubcity, data.WitnessWereda, data.WitnessHouseNumber, data.WitnessPhonenumber, data.LeaseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    deleteLandlordInfo: (data, callback) => {
        const sql = "DELETE FROM lease_landlord WHERE LeaseNumber = ?";

        conn.query(sql, [data.LeaseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        });
    },
    getLandlordInfoById: (data, callback) => {
        const sql = "SELECT * FROM lease_landlord WHERE LeaseNumber = ?";

        conn.query(sql, [data.LeaseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    }
}