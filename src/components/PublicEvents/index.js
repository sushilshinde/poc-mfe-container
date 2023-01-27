import React, { useEffect } from "react";
import { mount } from "PublicEvents/Module";

const PublicEvents = () => {
    useEffect(() => {
        mount();
    }, []);
    return <app-root class="card p-5 mt-4"></app-root>;
};

export default PublicEvents;