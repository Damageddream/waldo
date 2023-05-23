import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Leaderboard from "../components/Leaderboard";
import userEvent from "@testing-library/user-event";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { timeFormater } from "../components/Utilities";

jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  getDocs: jest.fn(),
}));

jest.mock("../components/Utilities", () => ({
  timeFormater: jest.fn(),
}));

describe("Leaderboard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and displays leaderboard data", async () => {
    const mockData = [
      { id: "1", name: "User 1", time: 100 },
      { id: "2", name: "User 2", time: 200 },
      { id: "3", name: "User 3", time: 300 },
    ];

    const mockCollection = {
      docs: mockData.map((data) => ({
        data: jest.fn().mockReturnValue(data),
        id: data.id,
      })),
    };

    getDocs.mockResolvedValue(mockCollection);
    timeFormater.mockReturnValue({ time: "00:00" });

    render(<Leaderboard db={''} addedTime={true} />);

    expect(screen.getByText("start fetching")).toBeInTheDocument();

    await waitFor(() => {
      expect(getDocs).toHaveBeenCalledWith(collection(, "times"));
      expect(screen.getByText("User 1")).toBeInTheDocument();
      expect(screen.getByText("User 2")).toBeInTheDocument();
      expect(screen.getByText("User 3")).toBeInTheDocument();
      expect(screen.getByText("00:00")).toBeInTheDocument();
      expect(screen.getByText("finished fetching")).toBeInTheDocument();
    });
  });

  test("sorts and displays leaderboard data", async () => {
    const mockData = [
      { id: "1", name: "User 1", time: 200 },
      { id: "2", name: "User 2", time: 100 },
      { id: "3", name: "User 3", time: 300 },
    ];

    const mockCollection = {
      docs: mockData.map((data) => ({
        data: jest.fn().mockReturnValue(data),
        id: data.id,
      })),
    };

    getDocs.mockResolvedValue(mockCollection);
    timeFormater.mockReturnValue({ time: "00:00" });

    render(<Leaderboard db={''} addedTime={true} />);

    await waitFor(() => {
      expect(screen.getByText("User 2")).toBeInTheDocument();
      expect(screen.getByText("User 1")).toBeInTheDocument();
      expect(screen.getByText("User 3")).toBeInTheDocument();
    });
  });
});
