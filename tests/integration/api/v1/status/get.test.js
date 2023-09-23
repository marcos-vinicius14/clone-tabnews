test(" GET to api/v1/status should return to 200", async () => {
    //fetch recebe como parameto uma URL
    const response = await fetch("http://localhost:3000/api/v1/status")
    expect(response.status).toBe(200)
})