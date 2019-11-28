/**
 * @author Marcus Thelin <marcus.thelin@24hr.se>
 * @description Component that renders structured data according to the
 * schema.org definition. See https://schema.org/ for more info.
 */

import React from 'react';
import PropTypes from 'prop-types';
const StructuredData = ({ context, type, ...rest }) => {
    const jsonData = JSON.stringify({
        '@context': context,
        '@type': type,
        ...rest
    });

    return (
        <script type="application/ld+json" charSet="UTF-8">
            {jsonData}
        </script>
    );
};

StructuredData.defaultProps = {
    context: 'https://schema.org'
};

StructuredData.propTypes = {
    context: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default StructuredData;
