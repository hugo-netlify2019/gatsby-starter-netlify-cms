import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo3.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
{/*         <div className="content has-text-centered">
          <img
            src={logo}
            alt="BTC"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
 */}        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-5">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        企業情報
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        個人情報保護方針
                      </Link>
                    </li>
                    <li>
{/*                       <Link className="navbar-item" to="/products"> */}
                      <Link className="navbar-item" to="/about">
                        採用情報
                      </Link>
                    </li>
                    <li>
{/*                       <Link className="navbar-item" to="/contact/examples"> */}
                      <Link className="navbar-item" to="/about">
                        ＰＲブース
                      </Link>
                    </li>
{/*                     <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-5">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        技術の改善普及
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        調査研究
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        診療会の開催
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        ＢＴＣニュース
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        短期講習会
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-5">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        研修について
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        研修内容
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        研修内容
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        研修カリキュラム
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        研修風景
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        研修施設・生活
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        用語解説
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        研修終了後の進路
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        体験入学会
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        研修生募集
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        ＦＡＱ
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        ＢＯＫＵＪＯＢ
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-5">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        調教場の施設
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        利用するためには
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        利用牧場リンク
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        見学コース
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        利用場競争成績
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        利用状況
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        利用者へのお知らせ
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
{/*               <div className="column is-5">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
 */}              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
{/*                 <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
 */}              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
