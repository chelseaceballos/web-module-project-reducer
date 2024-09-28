# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* event handler is fired and uses dispatch(addOne());
* dispatches -> action
* action package goes into reducer
* goes into reducer and adds one to state
...

* TotalDisplay shows the total plus 1.


reducer case => action creator => UI connection