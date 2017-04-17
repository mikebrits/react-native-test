export default {
    pages : [
        {
            title : "Page 1",
            content : {
                questions : [
                    {
                        type : 'text',
                        options : {
                            label : 'Test Text Question',
                            placeholder: 'Please enter something'
                        }
                    },
                    {
                        type : 'boolean',
                        options : {
                            label : 'Some bools bae',
                            positive_value : 'Yes',
                            negative_value : 'Nope'
                        }
                    }
                ]
            }
        },
        {
            title : "Page 2",
            content : {
                questions : [
                    {
                        type : 'text',
                        options : {
                            label : 'Test Text Question Too',
                            placeholder: 'Please enter something'
                        }
                    }
                ]
            }
        }
    ]
}