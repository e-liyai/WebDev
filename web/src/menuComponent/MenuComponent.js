import React, { Component } from 'react';
import './menu.css';
import options from './menuData';

export default class MenuComponent extends Component {
    constructor() {
        super();

        this.state = {
            menu: '',
        };
    }

    componentDidMount() {
        const scriptJQuery = document.createElement("script");
        const scriptBoootstrap = document.createElement("script");
        const scriptPromper = document.createElement("script");
    
        scriptJQuery.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
        scriptBoootstrap.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js";
        scriptPromper.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js";
        scriptJQuery.async = true;
        scriptPromper.async = true;
        scriptBoootstrap.async = true;
    
        document.body.appendChild(scriptJQuery);
        document.body.appendChild(scriptPromper);
        document.body.appendChild(scriptBoootstrap);
      }

    render() {
        console.log(options)
        return (
            <div className="menu">
                <div id="accordion">  
                    {options.map((element, key) => (
                        <div class="card">
                            <div class="card-header" id={element.name}>
                            <h5 class="mb-0">
                                {
                                    key === 0 ?
                                    (<button class="btn btn-link" data-toggle="collapse" data-target={`#${key}`} aria-expanded="true" aria-controls={`#${key}`}>{element.name}</button>) : 
                                    (<button class="btn btn-link" data-toggle="collapse" data-target={`#${key}`} aria-expanded="false" aria-controls={`#${key}`}>{element.name}</button>)
                                }
                            </h5>
                            </div>

                            <div id={key} class="collapse" aria-labelledby={element.name} data-parent="#accordion">
                            <div class="card-body">
                                { element.choices ? (
                                        element.choices.map(outter_item => {
                                            return (<div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id={outter_item.name} />
                                                <label class="form-check-label" for={outter_item.name}>
                                                        {outter_item.name}
                                                    </label>
                                            </div>)
                                        })
                                    ) : <div></div>
                                }
                                <p>You might also want: </p>
                                { element.related ? (
                                    element.related.map((related_item, key) => {
                                        return <div id="accordionR">
                                            <div class="card">
                                                <div class="card-header" id={related_item.name}>
                                                    <h5 class="mb-0">
                                                        {
                                                            key === 0 ?
                                                            (<button class="btn btn-link" data-toggle="collapse" data-target={`#${key}${related_item.name}`} aria-expanded="true" aria-controls={`#${key}${related_item.name}`}>{related_item.name}</button>) : 
                                                            (<button class="btn btn-link" data-toggle="collapse" data-target={`#${key}${related_item.name}`} aria-expanded="false" aria-controls={`#${key}${related_item.name}`}>{related_item.name}</button>)
                                                        }
                                                    </h5>
                                                </div>
                                                <div id={`${key}${related_item.name}`} class={`collapse`} aria-labelledby={related_item.name} data-parent="#accordionR">
                                                    <div class="card-body">
                                                    { related_item.choices ? (
                                                            related_item.choices.map(outter_item => {
                                                                return (<div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id={outter_item.name} />
                                                                    <label class="form-check-label" for={outter_item.name}>
                                                                            {outter_item.name}
                                                                        </label>
                                                                </div>)
                                                            })
                                                        ) : <div></div>
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                ) : <div></div>}
                            </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        )
    }
}