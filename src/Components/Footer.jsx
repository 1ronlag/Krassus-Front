import React from 'react';
import '../index.css';
import { FaFacebook } from 'react-icons/fa';

import { FaTwitterSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';



const Footer = () => {
  return (
    <div class="footer">
      <h4 class="sm-header">Siguenos</h4>
      <div class="line">
        <ul className='footer-list'>
          <li className="footer-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='footer-link'>
              <FaFacebook />{" "}
            </a>
          </li>

          <li className="footer-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='footer-link'> 
              <FaTwitterSquare />{" "}
            </a>
          </li>

          <li className="footer-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='footer-link'>
              <FaGithub />{" "}
            </a>
          </li>
          <li className="footer-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='footer-link'>
              <FaTwitter />{" "}
            </a>
          </li>
          <li className="footer-item">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='footer-link'>
              <FaYoutube />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer