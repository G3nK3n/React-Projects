import React, { Component } from 'react';

const forms = (props) => (
    <div>
        <form>
            {/* <label>
                Name: <input type="text" name="name" />
                Description: <input type="text" name="description" />
            </label> */}
                <input onClick={props.clicked} type="button" value="Send HTTP" />
        </form>
    </div>
)

export default forms;