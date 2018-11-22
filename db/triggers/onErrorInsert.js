module.exports = (sequlize)=>{

    const nameParams = {
        logickFunctionName: 'process_user',
        triggerName: 'insert_error',
        targetTable: 'error'
    }

    const query = createInsertTriggerQuery(nameParams, '')
    console.log(query);

    // sequelize.query("UPDATE users SET y = 42 WHERE x = 12").spread((results, metadata) => {
    //     console.log(metadata);
    // })
}
const createInsertTriggerQuery = ( nameParams={  logickFunctionName, triggerName, targetTable}, logickBody )=>{
    return [
            `CREATE OR REPLACE FUNCTION ${nameParams.logickFunctionName} RETURNS TRIGGER AS $${nameParams.triggerName}$`,
            '\tBEGIN',
            `\t\t${logickBody}`,
            '\tEND;',
            `$${nameParams.triggerName}$ LANGUAGE plpgsql;`,
            '\n',
            `CREATE TRIGGER ${nameParams.triggerName} ` + `AFTER INSERT ON ${nameParams.targetTable}`,
            `\tFOR EACH ROW EXECUTE PROCEDURE ${nameParams.logickFunctionName}();`
        ].join('\n');
}