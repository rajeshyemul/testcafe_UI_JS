class StringUtil {

    errorReport(actual, expected) {
        let difference = ''
        try {
            difference = `${diffString(actual, expected)}`
        } catch (error) {

        }
        const errorDetails = `${difference}\n\n>>>> Actual >>>>>\n ${JSON.stringify(actual, null, 2)} \n\n !=!=!= Expected !=!=!=\n ${JSON.stringify(expected, null, 2)}\n`
        return errorDetails
    }
}

export default new StringUtil();