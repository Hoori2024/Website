import React from 'react';
import './RegisterCard.sass';
import { Link } from "react-router-dom";
import logoGoogle from '../../assets/image/logoGoogle.png';

export default function LoginCard() {
    return (
        <div className="card cardBox">
            <div className="card-header card-headerBox">
                <p className="card-header-title card-header-titleBox">Register</p>
            </div>
            <div className="media-content media-contentBox">
                <div className="content contentBox">
                    <form className="field">
                        <p className="control has-icons-left has-icons-right">
                            <div className="bloc">
                                <label className="label labelBox"> 
                                    <h3>Email :</h3>
                                </label>
                                <input className="input" type="email" placeholder="Email" />
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check fa-xs"></i>
                                </span>
                            </div>
                            <div className="bloc">
                                <label className="label labelBox"> 
                                    <h3>Password :</h3>
                                </label>
                                <input className="input" type="password" placeholder="********" />
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check fa-xs"></i>
                                </span>
                            </div>
                            <div className="bloc">
                                <p className="control">
                                    <button className="button is-success">
                                    S'inscire
                                    </button>
                                </p>
                            </div>

                        </p>
                    </form>
                    <hr className="solid"></hr>
                    <div className="bloc">
                        <p className="control">
                            <button className="button buttonBox">
                                <img className="imgBox" src={logoGoogle} alt="Google" />
                            </button>
                        </p>
                    </div>
                    <hr className="solid"></hr>
                    <div className="bloc">
                        <p className="control">
                            <h3>D??j?? un Compte ?</h3>
                            <Link to="/signin" className="button is-success">
                                Se connecter
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}