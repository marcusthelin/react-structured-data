# @24hr/react-structured-data

This is a simple React component to render a script tag as type `application/ld+json`. This can be used to create structured data for Google search according to the [Schema.org](https://schema.org) definition.

## How to use

1. Import the module

```jsx
import StructuredData from '@24hr/react-structured-data';
```

2. Use it

```jsx
<StructuredData type={structureDataType} {...structuredDataObject} />
```

## Props - General

| Prop    |       Type        |      Default       |
|---------|:-----------------:|:------------------:|
| context |      string       | https://schema.org |
| type    | string (required) |     undefined      |

You can then pass it whatever structured data compatible objects as you want. These are just passed along.

## Props - FAQPage component
| Prop      |       Type       | Default |
|-----------|:----------------:|:-------:|
| questions | array (required) |         |

A question object should have the structure:
```js
{
    question: String,
    answer: String
}
```

## Example - FAQ Page

Import the built-in FAQPage component
```jsx
import React from 'react';
import { FAQPage } from '@24hr/react-structured-data';

const App = () => (
    <div>
        {/* Your content */}
        <FAQPage
            questions={[
                {
                    question: 'Test',
                    answer: 'Okey'
                }
            ]}
        />
    </div>
);
```
