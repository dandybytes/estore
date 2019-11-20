const encode = data => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

export const postFormNetlify = formState =>
    fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: encode({"form-name": "contact-form", ...formState})
    });

export const postFormFake = () => new Promise((resolve, reject) => resolve("form posted"));
