import React, { Component } from 'react'

export default class Navbar extends Component {
    handleSubmit(e) {
        e.preventDefault();

        console.log(e.target.username.value);

        if (
            e.target.username.value === "admin" &&
            e.target.password.value === "admin"
        ) {
            alert("Successfully logged in");
            e.target.username.value = "";
            e.target.password.value = "";
        } else {
            alert("Wrong username or password combination");
        }
    }

    render() {
        return (
            <div className="container-xxl x" style={{
                backgroundImage: `url("http://4.bp.blogspot.com/-XL91RGQuVhs/VgzhH5SxpYI/AAAAAAAAAzk/u-N1xYjXX1Q/s1600/sangkar-restoran.jpg")`
            }}>
                <h4>
                    <strong className="text-center">Daftar Pesanan</strong>
                </h4>
                <section class="order" id="order">

                    <h1 class="heading"> <span>Log</span> In </h1>

                    <div class="row cd inp">
                        <form onSubmit={this.handleSubmit}>
                            <div class="mb-3">
                                <label htmlFor="username" class="form-label">Username</label>
                                <input name="username" type="text" class="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" />
                                <div id="usernameHelp" class="form-text">We'll never share your username with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="password" class="form-label">Password</label>
                                <input name="password" type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn">Login</button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

