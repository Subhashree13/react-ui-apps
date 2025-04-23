//lifecycles of class component
mounting, updating, unmounting

when class component is rendered an instance of the same is created and constructor is called
and then render method is called post that the componentDidMount lifecycle method is called

mounting has two phases render phase and commit phase.
In render phase the constructor and render methods are called and once the dom is updated, componentdidmount is called in commit phase.



