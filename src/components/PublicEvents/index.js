import React, { useEffect } from "react";
import { mount } from "PublicEvents/Module";

const PublicEvents = () => {
    useEffect(() => {
        mount();
    }, []);
    return <app-root></app-root>;
};

export default PublicEvents;