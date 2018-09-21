<template>
    <div id="customer-info">
        <span class="name" v-text="customerName"></span>
        <span class="label">Saldo</span>
        <span :class="'saldo ' + saldoColorClass" v-text="customerSaldo"></span>
        <span class="label">Pris</span>
        <span :class="'price ' + priceColorClass" v-text="price + ' kr'"></span>
    </div>
</template>

<script>
export default {
    name: 'CustomerInfo',

    props: {
        customer: {
            type: Object,
            default: null
        },
        price: {
            type: Number,
            default: 0
        }
    },

    computed: {
        customerName() {
            return this.customer ? this.customer.name : null
        },
        customerSaldo() {
            return this.customer ? `${this.customer.saldo} kr` : null
        },
        saldoColorClass() {
            if (!this.customer) return ''
            return this.customer.saldo > 200 ? 'white' : (this.customer.saldo <= 0 ? 'black' : 'gray')
        },
        priceColorClass() {
            return ''
        }
    }
}
</script>

<style lang="scss" scoped>
div#customer-info {
    display: flex;
    align-items: flex-end;

    span {
        &.label {
            text-transform: uppercase;
            color: gray;
            margin-right: 6px;
            transform: translateY(-2px);
        }
        &.name {
            margin-right: 1em;
            font-size: 1.8em;
        }
        &.saldo, &.price {
            font-size: 1.4em;
            margin-right: 1em;

            &.gray {
                color: yellow;
            }
            &.black {
                color: #ac1414;
            }
        }
    }
}
</style>
