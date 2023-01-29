import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("TestGame4907", async function () {
  // Contracts are deployed using the first signer/account by default
  async function deployFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const TestGame4907 = await ethers.getContractFactory("TestGame4907");

    const testGame4907 = await TestGame4907.deploy();

    return { testGame4907, owner, otherAccount };
  }

  it("Should change renter for user", async function () {
    const { testGame4907, owner, otherAccount } = await loadFixture(
      deployFixture
    );

    const tokenId = 0;
    await testGame4907.safeMint(owner.address, tokenId);

    const userBefore = await testGame4907.userOf(tokenId);
    expect(userBefore).to.equal(ethers.constants.AddressZero);

    const ONE_DAY_IN_SECS = 24 * 60 * 60;
    let expires = (await time.latest()) + ONE_DAY_IN_SECS;

    await testGame4907.setUser(tokenId, otherAccount.address, BigInt(expires));

    const userAfter = await testGame4907.userOf(tokenId);
    expect(userAfter).to.equal(otherAccount.address);

    const userOwner = await testGame4907.ownerOf(tokenId);
    expect(userOwner).to.equal(owner.address);
  });
});
