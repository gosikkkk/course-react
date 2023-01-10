import React from "react";
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component",() => {
    test("status from props should be in the state",() => {
        const component = create(<ProfileStatus status="Rita.com"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("Rita.com")
    });
});

describe("ProfileStatus componenta",() => {
    test("after creation span with status should be dispayed",() => {
        const component = create(<ProfileStatus status="Rita.com"/>)
        const root = component.root
        let span = root.findAllByType("span")
        expect(span.length).toBe(1)
    });
});