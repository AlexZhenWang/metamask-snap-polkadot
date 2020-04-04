import React, {useEffect, useState} from "react";
import {Button, Typography, Card, CardContent, CardHeader, Grid, Divider, Box} from '@material-ui/core/';
import {getAddress, getBalance, getPublicKey, exportSeed} from "../../services/account";
import formatBalance from "@polkadot/util/format/formatBalance"

export const Account = () => {

    let [balance, setBalance] = useState("0");
    let [address, setAddress] = useState("");
    let [publicKey, setPublicKey] = useState("");

    useEffect(() => {
        (async () => setPublicKey(await getPublicKey()))();
        (async () => setAddress(await getAddress()))();
        (async () => setBalance(await getBalance()))();
    }, []);

    // useEffect(() => {
    //     // fetch balance every 3 second
    //     const interval = setInterval(async () => {
    //         setBalance(await getBalance())
    //     }, 3000);
    //     return function cleanup() {
    //         if (interval) {
    //             clearInterval(interval)
    //         }
    //     };
    // }, []);

    const handleExport = async () => {
        const privateKey = await exportSeed();
        alert(privateKey);
    }

    return (
        <Card>
            <CardHeader title="Account details"/>
            <CardContent>
                <Grid container alignItems="center">
                    <Grid item md={6} xs={12}>
                        <Typography variant="h6">ADDRESS:</Typography>
                        <Typography variant="subtitle2">{address}</Typography>
                        <Divider light/>
                        <Box m={"0.5rem"}/>
                        <Typography variant="h6">PUBLIC KEY:</Typography>
                        <Typography variant="subtitle2">{publicKey}</Typography>
                        <Divider light/>
                        <Box m={"0.5rem"}/>
                        <Typography variant="h6">ACCOUNT BALANCE:</Typography>
                        <Typography variant="subtitle2">
                            {formatBalance(balance, {decimals: 12, withSi: true, withUnit: "KSM"})}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} justify="flex-end">
                    <Button color="secondary" variant={"contained"} onClick={handleExport}>Export private key</Button>
                </Grid>
            </CardContent>
        </Card>
    );
}
