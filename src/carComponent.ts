export default function carComponent(carId: string): string {
    return `
    <div id="${carId}" class="car-card">
        <button class="car-start-button">start</button>
        <p class="reset">car status: <span class="car-status">off</span></p>
        <p class="reset">current transmission: <span class="car-transmission-val">N</span></p>
    </div>
    `;
}
