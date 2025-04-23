import React from 'react';

class ThemeWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.getItem('theme') || 'light',
    };
  }

  componentDidMount() {
    document.documentElement.setAttribute('data-bs-theme', this.state.theme);
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    this.setState({ theme: newTheme }, () => {
      // Apply theme to <html> tag using data-bs-theme
      document.documentElement.setAttribute('data-bs-theme', newTheme);
    });
  };

  render() {
    const { theme } = this.state;

    return (
      <div className="p-2">
        <button className="btn btn-sm btn-secondary mb-3 text-black fw-bold" onClick={this.toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        {this.props.children}
      </div>
    );
  }
}

export default ThemeWrapper;
