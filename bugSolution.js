```javascript
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Initialize with a default value
  }

  componentDidMount() {
    // Access this.props safely here
    this.setState({ count: this.props.initialCount });
  }

  render() {
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
      </View>
    );
  }
}

export default MyComponent;
```