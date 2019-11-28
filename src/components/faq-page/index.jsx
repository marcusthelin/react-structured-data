import React from 'react';
import PropTypes from 'prop-types';

const FAQPage = ({ questions = [] }) => {
    const base = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage'
    };
    const modifiedQuestionsArray = questions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer
        }
    }));
    base.mainEntity = modifiedQuestionsArray;
    return <script type="application/ld+json">{JSON.stringify(base)}</script>;
};

FAQPage.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired
        })
    )
};

export default FAQPage;
