import React, { ReactElement, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Joke = ({ match }: any): ReactElement => {
  const [singleType, setSingleType] = useState<boolean>(true);
  const {
    params: { id },
  } = match;

  console.log('joke page id', match);

  return (
    <div className='single-joke'>
      <form className={id ? 'for-edit' : 'for-view'}>
        <div className='single-joke-inner'>
          <div className='col-md-12 input-field'>
            <label>Category</label>
            <select name='category'>
              <option>Miscellaneous</option>
              <option>Pun</option>
              <option>Programming</option>
              <option>Dark</option>
            </select>
            <input type='text' />
          </div>
          <div className='col-md-12 input-field'>
            <label>Type</label>
            <select
              name='type'
              onChange={(): void => setSingleType(!singleType)}
            >
              <option>Single</option>
              <option>Two Part</option>
            </select>
            <input type='text' />
          </div>
          <div className='col-md-12 input-field'>
            <label>Flags</label>
            <input type='checkbox' name='flags' />
            NSFW <br />
            <input type='checkbox' name='flags' /> Religious <br />
            <input type='checkbox' name='flags' />
            Political <br />
            <input type='checkbox' name='flags' /> Racist
          </div>
          <div className='col-md-12 input-field'>
            <label>Content</label>
            <textarea name='content'></textarea>
          </div>
          {!singleType ? (
            <div className='col-md-12 input-field'>
              <label>Delivery</label>
              <textarea name='delivery'></textarea>
            </div>
          ) : undefined}
          <a href='#' className='single-product-footer-btn'>
            Edit
          </a>
        </div>
      </form>
    </div>
  );
};

export default Joke;
