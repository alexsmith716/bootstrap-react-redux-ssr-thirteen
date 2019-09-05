# bootstrap-react-redux-ssr-thirteen

## Overview:

App builds off 'bootstrap-react-redux-webpack-ssr-twelve'. 

The app utilizes custom async middleware for response to Redux actions.

=============================================================
=============================================================

TO DO's:

1) Addressing the `Failed prop type` warnings (occurring for `prop-types` `data`):

  - `Warning: Failed prop type: Invalid prop `tablesData` of type `array` supplied to `Tables`, expected`

2) Going over and fine tuning/completely re-doing all React (lifecycles) and Redux (initial state/state/reducer)

=============================================================
=============================================================

### The Component Lifecycle
------------------------------------------------

### Mounting

#### These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

  * constructor()
  * static getDerivedStateFromProps()
  * render()
  * componentDidMount()


### Updating

####  An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

  * static getDerivedStateFromProps()
  * shouldComponentUpdate()
  * render()
  * getSnapshotBeforeUpdate()
  * componentDidUpdate()