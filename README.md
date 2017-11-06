In this commit simple data in App.js is passed to other child component ListContacts.js
To access the data in child component you have to pass using props
as of now we are not displaying the data but you can see that in console

now you can access data in child component from parent - display
 Created one more component called Header 
 Now Parent component = App is passing data to 2 of its child components Header & ListContacts

Adding state to the component - Passing data from parent component to child component using state
  App.js file updated with state but moving the data inside class (component App) and using keyword state to declare state of the app
  once the state is update then the UI component will take care of display part