import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export const LocationAutocomplete = (props) => {
    return (
        <div class="input-group-lg mt-3 mb-3">
            <GooglePlacesAutocomplete 
                inputClassName="form-control" 
                placeholder={props.placeholder || "Your current location"}
                onSelect={(e) => props.setValue(e)}
            />
        </div>
    )
}