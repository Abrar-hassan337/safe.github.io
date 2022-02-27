/**
 * Given a string with % delimited placeholders and parameters,
 * replace the placeholders.
 *
 * @todo Write tests.
 *
 * @param string
 * @param parameters
 * @param renderAsNode
 * @returns {*}
 */
export const replacePlaceholders = (string, parameters = {}, renderAsNode = false) => {
    let mainStringParts = [string];

    Object.keys(parameters).forEach((key) => {
        const value = parameters[key];
        const tempStringParts = [];

        // use slice here instead of using the array directly, because
        // we shouldnt loop through the main array as it will be modified
        mainStringParts.slice(0).forEach((stringPart) => {
            if (typeof stringPart !== 'string') {
                tempStringParts.push(stringPart);
                return;
            }

            const segmentParts = stringPart.split(`%${key}%`);

            segmentParts.forEach((segmentPart, index) => {
                if (index > 0) {
                    tempStringParts.push(value);
                }

                tempStringParts.push(segmentPart);
            });
        });

        mainStringParts = tempStringParts;
    });

    return renderAsNode ? mainStringParts : mainStringParts.join('');
};