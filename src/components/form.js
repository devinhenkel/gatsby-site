
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductForm extends Component {
    render() {
        return (
                        
            <div class="form-holder">
                <form action="#" method="POST">
                    <div class="fields">
                        <div class="form-text" id="container_first_name">
                            <label class="form-label" for="first_name" id="label_first_name"><span class="label-style">FIRST NAME&nbsp;*</span></label><input id="first_name" name="first_name" type="text" placeholder="First Name" class="ub-input-item single text form_elem_first_name" />
                        </div>
                        <div class="form-text" id="container_last_name">
                            <label class="form-label" for="last_name" id="label_last_name"><span class="label-style">LAST NAME&nbsp;*</span></label><input id="last_name" name="last_name" type="text" placeholder="Last Name" class="ub-input-item single text form_elem_last_name" />
                        </div>
                        <div class="form-text" id="container_franchise_name">
                            <label class="form-label" for="franchise_name" id="label_franchise_name"><span class="label-style">FRANCHISE NAME&nbsp;*</span></label><input id="franchise_name" name="franchise_name" type="text" placeholder="Franchise Name" class="ub-input-item single text form_elem_franchise_name" />
                        </div>
                        <div class="form-text email" id="container_email">
                            <label class="form-label" for="email" id="label_email"><span class="label-style">EMAIL&nbsp;*</span></label><input id="email" name="email" type="text" placeholder="Email Address" class="ub-input-item single text form_elem_email" />
                        </div>
                    </div>
                </form>
            <a class="form-button" id="form-button-submit" href="#"><span class="label"><strong>DOWNLOAD EBOOK</strong></span></a>
            </div>
               
        );
    }
}

ProductForm.propTypes = {
    data: PropTypes.object.isRequired
}

export default ProductForm;