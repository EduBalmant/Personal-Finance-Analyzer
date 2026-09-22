    function atualizarGraficoHistorico() {

        const canvas =
            document.getElementById("graficoHistorico");

        if (!canvas) return;

        if (meuGraficoLinha) {
            meuGraficoLinha.destroy();
        }

        const ctx = canvas.getContext("2d");

        /* =========================================
        GRADIENTES
        ========================================= */

        const gradientGastos =
            ctx.createLinearGradient(
                0,
                0,
                0,
                280
            );

        gradientGastos.addColorStop(
            0,
            "rgba(239,68,68,.30)"
        );

        gradientGastos.addColorStop(
            1,
            "rgba(239,68,68,0)"
        );


        const gradientSalario =
            ctx.createLinearGradient(
                0,
                0,
                0,
                280
            );

        gradientSalario.addColorStop(
            0,
            "rgba(34,197,94,.25)"
        );

        gradientSalario.addColorStop(
            1,
            "rgba(34,197,94,0)"
        );


        /* =========================================
        GRÁFICO
        ========================================= */

        meuGraficoLinha =
            new Chart(
                canvas,
                {

                    type: "line",

                    data: {

                        labels:
                            historicoMeses.map(
                                h => h.label
                            ),

                        datasets: [

                            {
                                label: "Gastos",

                                data:
                                    historicoMeses.map(
                                        h => h.gastos
                                    ),

                                borderColor:
                                    "#ef4444",

                                backgroundColor:
                                    gradientGastos,

                                fill: true,

                                borderWidth: 3,

                                tension: .45,

                                pointRadius: 5,

                                pointHoverRadius: 8,

                                pointBackgroundColor:
                                    "#ef4444",

                                pointBorderColor:
                                    "#101722",

                                pointBorderWidth: 3,

                                pointHoverBorderWidth: 3
                            },


                            {
                                label: "Salário",

                                data:
                                    historicoMeses.map(
                                        h => h.salario
                                    ),

                                borderColor:
                                    "#22c55e",

                                backgroundColor:
                                    gradientSalario,

                                fill: true,

                                borderWidth: 3,

                                tension: .45,

                                pointRadius: 5,

                                pointHoverRadius: 8,

                                pointBackgroundColor:
                                    "#22c55e",

                                pointBorderColor:
                                    "#101722",

                                pointBorderWidth: 3,

                                pointHoverBorderWidth: 3
                            }

                        ]

                    },


                    options: {

                        responsive: true,

                        maintainAspectRatio: false,

                        interaction: {

                            mode: "index",

                            intersect: false

                        },


                        animation: {

                            duration: 1200,

                            easing:
                                "easeOutQuart",

                            x: {

                                duration: 1200

                            },

                            y: {

                                duration: 900

                            }

                        },


                        plugins: {

                            legend: {

                                position: "top",

                                align: "start",

                                labels: {

                                    color:
                                        "#cbd5e1",

                                    usePointStyle: true,

                                    pointStyle: "circle",

                                    padding: 20,

                                    font: {

                                        family:
                                            "Inter",

                                        size: 12,

                                        weight: "600"

                                    }

                                }

                            },


                            tooltip: {

                                backgroundColor:
                                    "rgba(10,15,25,.94)",

                                titleColor:
                                    "#ffffff",

                                bodyColor:
                                    "#cbd5e1",

                                borderColor:
                                    "rgba(255,255,255,.10)",

                                borderWidth: 1,

                                padding: 14,

                                cornerRadius: 12,

                                displayColors: true,

                                titleFont: {

                                    family:
                                        "Inter",

                                    size: 12,

                                    weight: "700"

                                },

                                bodyFont: {

                                    family:
                                        "Inter",

                                    size: 12

                                },

                                callbacks: {

                                    label:
                                        function(context) {

                                            return (
                                                " " +
                                                context.dataset.label +
                                                ": " +
                                                formatarMoeda(
                                                    context.parsed.y
                                                )
                                            );

                                        }

                                }

                            }

                        },


                        scales: {

                            x: {

                                border: {
                                    display: false
                                },

                                grid: {

                                    display: false

                                },

                                ticks: {

                                    color:
                                        "#64748b",

                                    font: {

                                        family:
                                            "Inter",

                                        size: 11

                                    },

                                    padding: 8

                                }

                            },


                            y: {

                                beginAtZero: true,

                                border: {
                                    display: false
                                },

                                grid: {

                                    color:
                                        "rgba(255,255,255,.045)",

                                    drawTicks: false

                                },

                                ticks: {

                                    color:
                                        "#64748b",

                                    padding: 10,

                                    font: {

                                        family:
                                            "Inter",

                                        size: 10

                                    },

                                    callback:
                                        function(value) {

                                            if (
                                                value >= 1000
                                            ) {

                                                return (
                                                    "R$ " +
                                                    (
                                                        value / 1000
                                                    ).toFixed(1) +
                                                    "k"
                                                );

                                            }

                                            return (
                                                "R$ " +
                                                value
                                            );

                                        }

                                }

                            }

                        }

                    }

                }
            );
    }