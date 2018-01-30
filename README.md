#Hypebeast Angular Form Factory

TL;DR
-
This is not yet another form builder requires you to submit a form schema in JSON format then bootstrap a form that can let user interact with. We share the same goal but are doing it in a relatively more flexible, simpler way. Well, at least we think.

What is our team trying to address? We have many form builders live now 
-
In previous few project, we tried to use JavaScript form building tool so that we can have an interactive form with least amount of effort. It works fine. Well for the beginning only.

Once we demand more like UI customization, special form field handling, event listening, array handlings etc. or even just trying to update the form structure we truggle quite a bit. We need to dig into code and loads of try and error until it eventually works.

Recently we need to build a panel for one of out internal system with a special form struture. We are sure that it is achievable by many form build available in GitHub for free but we decide to step forward.

Features
-
 - Declare form structures by decorators provided
	 - IDE will provide hints to you so that you don't need to check the document before you set anything anymore. Painless solution
 - Everythings on your command
     - Factory returns two parts: A structured Angular form group and a template object for you to wirte your own form renderer with everything you needed inside. Use part of the component or fullstack are fully under your control 
 - Render form with prebuilt component in two main styles: Bootstrap or Angular Material
 - Override any part you need
     - Any part of the form UI by default doesnot work for you, just pass the component to us. We will handle the rest. It is really easy

Example:
```ts
export class LeafNodeCondition {
    // Mark this field so that Form Factory knows it has extra informations
    @SetupConfig()
    @ChoiceOptions({
        options: () => [{
            name: 'Category',
            value: 'CATEGORY'
        }, {
            name: 'Tag',
            value: 'TAG'
        }],
        label: ''
    })
    // Default will be string value of `CATEGORY` for attribute `columnType` in object instance of LeafNodeCondition
    columnType: 'CATEGORY' | 'TAG' = 'CATEGORY'; 

    @SetupConfig()
    // Originally label rendered in HTML will be the name of each field 
    // split by capital letter or underscore depends on options passed to factory. 
    // So it should be `Column name` if we do not override it. 
    // Supposedly this is what backend server will accept but it does not look nice to user, 
    // we are overriding it to `Name` here. 
    // There are lots more control like form field hints, html id and class attributes etc. See @FormConfig decorator.
    
    // Form builders available are booted by a prebuilt component, we are the same too but more. You can override part of the form with  
    @FormConfig({
        label: 'Name',
        useComponent: MySelectizeComponent
    })
    columnName: string = '';

    @SetupConfig()
    @ChoiceOptions({
        options: () => [{
            name: '≥',
            value: 'GREATER_THAN'
        }, {
            name: '≤',
            value: 'LESS_THAN'
        }],
        label: ''
    })
    operator: 'GREATER_THAN' | 'LESS_THAN' = 'GREATER_THAN';

    @SetupConfig()
    @FormConfig({
        'label': 'Score'
    })
    value: number = 0;
}
```

Contributions & Troubleshooting
-
You can directly open new issues and submit pull request to this repository. We will forcefully require users to ask questions in StackOverflow once our issues stack goes overflow.

License
-
MIT License and you can refer to `LICENSE` file

