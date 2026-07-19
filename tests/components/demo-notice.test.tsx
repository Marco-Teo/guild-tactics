import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DemoNotice } from "@/components/demo-notice";

describe("DemoNotice", () => {
  it("identifies demo content as non-official", () => {
    render(<DemoNotice />);
    expect(
      screen.getByRole("complementary", { name: /data status/i }),
    ).toHaveTextContent(/not official GuildRun data/i);
  });
});
