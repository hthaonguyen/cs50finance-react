export const request = async (url, method,body) => {
    let response;
    try {
        response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
        if (response.ok) {
            return [response,null];
        } else {
            let error = await response.json();
            return [response,error];
        }
    }
    catch (error) {
        if (response && response.message) {
            alert(response.message);
        } else if (error && error.message) {
            alert(error.message)
        } else {
            alert("something went wrong! Please try again.")
        }
        return [null,null];
    }
};
