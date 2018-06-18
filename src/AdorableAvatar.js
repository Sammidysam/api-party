import React, { Component } from "react"

class AdorableAvatar extends Component {
    constructor (props) {
        super(props)

        this.state = {
            avatarUrl: this.emailToAvatar()
        }
    }

    emailToAvatar = () => {
        return `https://api.adorable.io/avatars/285/${this.props.match.params.email}.png`
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.email !== this.props.match.params.email)
            this.fetchUserData()
    }

    fetchUserData = () => {
        this.setState({ avatarUrl: this.emailToAvatar() })
    }

    render () {
        return (
            <div className="AdorableAvatar">
                <img src={this.state.avatarUrl} alt="avatar" />
                <h2>
                    {this.props.match.params.email}
                </h2>
            </div>
        )
    }
}

export default AdorableAvatar