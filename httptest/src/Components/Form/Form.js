import React, { Component } from 'react';

const forms = (props) => (
    <div>
        <form>
            {/* <label>
                Name: <input type="text" name="name" />
                Description: <input type="text" name="description" />
            </label> */}
            <textarea>

            </textarea>
                <input onClick={props.clicked} type="button" value="Send HTTP" />
                <input onClick={props.getData}type="button" value="Get Data" />
        </form>
    </div>
)

export default forms;