import React from 'react';
import vest3 from '../../assets/images/vesti/vest3.jpg';
import {Col, Image, Row} from "react-bootstrap";
const BancaIntesaVest = () => {
    return (
        <>
            <p>Ukoliko si na završnoj godini fakulteta ili već poseduješ diplomu, nemaš iskustva u struci, a želiš da ga stekneš u kompaniji koja će ti pružiti punu mentorsku podršku i priliku da radiš na interesantnim zadacima i projektima, prijavi se na naš četvoromesečni program plaćene prakse sa nepunim radnim vremenom. Za više detalja i prijavu, klikni na link.</p>

            <a href="https://intesa.oneassessment.com/job/BIB-Future-GEN-yp1g7ry/apply">Link za prijavu</a>

            <Row className="m-3">
                <Col>
                    <Image src={vest3} fluid={true}/>
                </Col>
            </Row>
        </>
    );
};

export default BancaIntesaVest;