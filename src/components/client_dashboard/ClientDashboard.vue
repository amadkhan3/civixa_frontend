<template>
    <div>
        <b-container>
            <h2 class="text-center">Hello {{userData.first_name}} {{userData.last_name}}</h2>
            <b-row>
                <b-col cols="6" offset="2">
                    <h4>No. of Datasets</h4>
                    <h2><b-badge variant="primary">24</b-badge></h2>
                    <h4 class="mt-4">Recentrly viewed datasets :</h4>
                </b-col>
            </b-row>
            <b-row class="mt-4">
                <!-- <b-col cols="1">
                </b-col> -->
                <b-col>
                    <apexchart type=radialBar height=300  width=300 :options="chartOptions1" :series="series1" />
                </b-col>
                <b-col>
                    <apexchart type=radialBar height=300 width=300 :options="chartOptions2" :series="series2" />
                </b-col>
                <b-col>
                    <apexchart type=radialBar height=300 width=300 :options="chartOptions3" :series="series3" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import store from '../../store.js'
export default {
    name: 'ClientDashboard',
    components: {

    },
    data () {
        return {
            userData: {},
            series1: [50],
            series2: [65,75],
            series3: [55,85],
            chartOptions1: {
                legend: {
                    show: false,
                },
                plotOptions: {
                    radialBar: {
                        size: 120,
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            chartOptions2: {
                legend: {
                    show: false,
                },
                plotOptions: {
                    radialBar: {
                        size: 120,
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            chartOptions3: {
                legend: {
                    show: false,
                },
                colors: ["#20E647"],
                plotOptions: {
                    radialBar: {
                        size: 120,
                        hollow: {
                            margin: 0,
                            size: "70%",
                            background: "#293450"
                        }
                    },
                },
                dataLabels: {
                    value: {
                        color: "#fff",
                        fontSize: "30px",
                        show: true
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        }
    },
    mounted () {
        this.userData =  JSON.parse(localStorage.getItem('user_data'));
    }
}
</script>

<style>

</style>
