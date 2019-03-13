"use strict"
const RequestPromise = require('request-promise');

const RequestService = {
    getRP: (uri, headers) => {
        const options = {
            method: 'GET',
            uri: uri,
            headers: headers,
        }
        return RequestPromise(options);
    },
    postFormRP: (uri, form, headers) => {
        const options = {
            method: 'POST',
            uri: uri,
            form: form,
            headers: headers,
        };
        return RequestPromise(options);
    },
    postBodyRP: (uri, body, headers) => {
        const options = {
            method: 'POST',
            uri: uri,
            body: body, 
            headers: headers,
            json: true
        };
        return RequestPromise(options);
    },
    putRP: (uri, body, headers) => {
        const options = {
            method: 'PUT',
            uri: uri,
            body: body,
            headers: headers,
        };
        return RequestPromise(options);
    },
    deleteRP: (uri, body, headers) => {
        const options = {
            method: 'DELETE',
            uri: uri,
            body: body,
            headers: headers,
        };
        return RequestPromise(options);
    },
}

module.exports = RequestService;