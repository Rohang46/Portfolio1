import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_menu">
        <Link
          to="https://leetcode.com/u/gaikwadrohan/"
          className="footer-link link"
          target="_blank"
        >
          <div className="footer-menu-item-wrapper">
            <div className="footer-menu-text">
              LeetCode
            </div>
          </div>
        </Link>
        <Link
          to="https://github.com/Rohang46?tab=repositories"
          className="footer-link link"
          target="_blank"
        >
          <div className="footer-menu-item-wrapper">
            <div className="footer-menu-text">
              Github
            </div>
          </div>
        </Link>
        <Link
          to="https://www.linkedin.com/in/rohan-gaikwad-929802234/"
          className="footer-link link"
          target="_blank"
        >
          <div className="footer-menu-item-wrapper">
            <div className="footer-menu-text">
              LinkedIn
            </div>
          </div>
        </Link>
      </div>
    </footer>
  )
}
